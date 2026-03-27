import cv2
import numpy as np

def multicolor_radial_gradient(image_path, output_path, center_color, edge_color):
    """
    center_color: (B, G, R) at center
    edge_color: (B, G, R) at edges
    """

    img = cv2.imread(image_path)

    if img is None:
        print("Error: Image not found!")
        return

    h, w = img.shape[:2]

    # Convert to grayscale for lighting effect
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) / 255.0

    # Create coordinate grid
    y, x = np.ogrid[:h, :w]

    # Center
    cx, cy = w // 2, h // 2

    # Distance from center
    dist = np.sqrt((x - cx)**2 + (y - cy)**2)
    max_dist = np.sqrt(cx**2 + cy**2)

    # Normalize (0 center → 1 edges)
    t = dist / max_dist
    t = np.clip(t, 0, 1)

    # Create output image
    result = np.zeros_like(img, dtype=np.float32)

    # Interpolate between center_color → edge_color
    for i in range(3):  # BGR
        result[:, :, i] = (
            (1 - t) * center_color[i] +
            t * edge_color[i]
        )

    # Combine with image brightness
    result = result * gray[:, :, None]

    # Convert to uint8
    result = np.clip(result, 0, 255).astype(np.uint8)

    cv2.imwrite(output_path, result)

    print("Multicolor gradient image saved!")


# Example usage
image_path = "S:\Website\Omio\Logo.png"
output_path = "output_multicolor.jpg"

# Example: Blue center → Pink edges
center_color = (255, 172, 150)   # Blue-ish (BGR)
edge_color = (255, 172, 35)     # Pink

multicolor_radial_gradient(image_path, output_path, center_color, edge_color)
