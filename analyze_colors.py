from collections import Counter
from PIL import Image
import sys

def get_dominant_colors(image_path, num_colors=5):
    try:
        image = Image.open(image_path)
        image = image.convert('RGBA') # Ensure RGBA
        image = image.resize((150, 150))
        pixels = list(image.getdata())
        
        valid_pixels = []
        for r, g, b, a in pixels:
            # Ignore fully transparent or very distinct background colors if needed
            # For now, just ignore transparent pixels
            if a > 0: 
                valid_pixels.append((r, g, b))

        if not valid_pixels:
            print("Image is fully transparent.")
            return

        counter = Counter(valid_pixels)
        most_common = counter.most_common(num_colors + 5) # Get more to filter similar
        
        print("Dominant Colors found:")
        for (r, g, b), count in most_common:
            hex_color = "#{:02x}{:02x}{:02x}".format(r, g, b)
            # Filter out white/black if you want strictly brand colors, but for analysis list them all
            print(f"- {hex_color} (R={r}, G={g}, B={b}) Count: {count}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        get_dominant_colors(sys.argv[1])
    else:
        print("Usage: python analyze_colors.py <image_path>")
