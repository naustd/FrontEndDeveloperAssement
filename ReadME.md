# BoreDM React-PDF Assessment

This project recreates the provided BoreDM drilling report layout as a **React-PDF component** using JSX.  
It mirrors a real-world front-end developer task where precise PDF structuring, component hierarchy, and layout consistency are essential.

## Tech Stack

- **React + JSX**
- **@react-pdf/renderer**
- **Custom inline styling** via `StyleSheet.create`
- **Flexbox grid alignment** for table borders and responsive layout
- **Static mock data** for demonstration

## Implementation Notes

- Header, drilling info table, remarks box, and footer rows are recreated pixel-perfect from the provided reference image.
- The **Brand Address** field spans horizontally across the table, aligned exactly with the upper columns.
- All text, border, and layout properties are tuned for letter-sized PDF output.

## Challenges Faced

The only notable challenge was reproducing the **groundwater level symbol** (the small “triangle-over-line” icon) before the **Water:** label.  
Finding an SVG that rendered correctly inside React-PDF took several trials; it was finally implemented using a Unicode triangle (`▽`) and a small horizontal rule to ensure consistent rendering across environments.

## Output

Below is the final rendered layout and generated PDF preview:

### PDF Preview

![Result PDF Preview](![alt text](image.png))
