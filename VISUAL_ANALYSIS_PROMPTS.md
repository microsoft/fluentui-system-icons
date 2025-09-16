# Visual Icon Description Prompts

This document contains structured prompts for using LLM vision capabilities to generate visual descriptions of PNG icons. The goal is to describe what you actually see in the image, not what you think it represents based on the filename.

## Core Prompt Template

### Primary Visual Analysis Prompt

```
Please analyze this icon image and provide a purely visual description of what you see. Focus on:

**Visual Elements:**
- Shapes (circles, rectangles, triangles, lines, curves, etc.)
- Positioning and orientation of elements
- Relative sizes and proportions
- Line thickness (thin, medium, thick)
- Fill vs outline elements
- Connections between elements

**Spatial Relationships:**
- What's on top, bottom, left, right
- What's inside vs outside other shapes
- Overlapping or separate elements
- Directional indicators (arrows, pointing elements)

**Style Characteristics:**
- Solid filled shapes vs outlined shapes
- Consistent line weights
- Angular vs curved elements
- Symmetrical vs asymmetrical composition

**Description Guidelines:**
- Keep descriptions under 30 words
- Use simple, clear geometric language
- Describe position and orientation precisely
- Don't assume meaning - just describe what you see
- Focus on the most prominent visual features first

**Example Format:**
"A circular outline with two straight lines extending from the center at different angles, positioned above a horizontal rectangular bar."

Now describe this icon:
```

## Batch Processing Prompts

### For Multiple Icons at Once

```
I will show you [NUMBER] icon images. For each one, provide a concise visual description following these rules:

1. Describe only what you visually observe
2. Use geometric and spatial terms
3. Keep each description under 25 words
4. Focus on shapes, lines, and their relationships
5. Don't interpret meaning from context

Format your response as:
Image 1: [visual description]
Image 2: [visual description]
...

Here are the icons:
```

### For Comparison Analysis

```
I will show you two versions of the same icon (typically filled vs outline versions). Please:

1. Describe what you see in each image
2. Note the key visual differences between them
3. Use only visual/geometric language

Format:
Version 1: [description]
Version 2: [description]
Key difference: [main visual distinction]

Here are the two icons:
```

## Specialized Prompts

### For Complex Icons

```
This icon appears to have multiple visual elements. Please:

1. Identify the main visual components
2. Describe how they relate spatially
3. Note any layering or overlapping
4. Describe the overall composition

Break down your analysis:
- Primary element: [description]
- Secondary elements: [description]
- Spatial arrangement: [how they're positioned]
- Overall impression: [unified description]

Analyze this complex icon:
```

### For Arrow/Directional Icons

```
This appears to be a directional or arrow-based icon. Please describe:

1. The main directional element(s)
2. Any additional shapes or markers
3. The precise direction/orientation
4. Any curves, bends, or angles in the path

Focus on:
- Arrow head shapes and directions
- Line paths and curves
- Starting and ending points
- Any additional geometric elements

Describe this directional icon:
```

### For Container/Frame Icons

```
This icon appears to have container-like or framing elements. Please describe:

1. The outer boundary or frame
2. Any internal elements
3. How internal elements relate to the container
4. Any openings, gaps, or connections

Focus on:
- Container shape (rectangle, circle, etc.)
- What's inside vs outside
- Border characteristics
- Internal layout

Describe this container-based icon:
```

## Quality Control Prompts

### Verification Prompt

```
I have this description of an icon: "[DESCRIPTION]"

Please look at the actual icon image and verify:
1. Is the description visually accurate?
2. Are there any important visual elements missing?
3. Are there any incorrect details?
4. Could the description be clearer or more precise?

Provide:
- Accuracy assessment: [good/needs revision]
- Missing elements: [if any]
- Suggested improvements: [if needed]
- Revised description: [if necessary]
```

## Workflow Instructions

### Step-by-Step Process

1. **Single Icon Analysis**
   - Use the Primary Visual Analysis Prompt
   - Upload one PNG image
   - Get detailed visual description
   - Save to JSONL format: `{"image": "png_icons/filename.png", "visual_description": "description"}`

2. **Batch Processing** 
   - Use Batch Processing Prompt
   - Upload 5-10 images at once
   - Get multiple descriptions
   - Parse and format results

3. **Quality Review**
   - Use Verification Prompt on sample descriptions
   - Refine prompt if needed
   - Establish consistency standards

4. **Full Dataset Processing**
   - Process icons in batches of 10-20
   - Maintain consistent formatting
   - Build complete JSONL file incrementally

## Output Format

All descriptions should be saved in JSONL format:

```json
{"image": "png_icons/access_time_24_filled.png", "visual_description": "A solid black circle with two straight lines extending from the center at different angles"}
{"image": "png_icons/airplane_take_off_24_regular.png", "visual_description": "An airplane silhouette tilted diagonally upward to the right with a small circle beneath and horizontal line below"}
```

## Tips for Best Results

1. **Be Specific**: Use precise geometric terms
2. **Stay Visual**: Avoid functional interpretations
3. **Note Proportions**: Mention relative sizes
4. **Describe Orientation**: Use directional language clearly
5. **Focus on Prominence**: Start with most visible elements
6. **Maintain Consistency**: Use similar vocabulary across descriptions

## Example Session

Here's how to use this with an LLM:

1. Copy the Primary Visual Analysis Prompt
2. Upload a PNG icon
3. Get the visual description
4. Format as JSONL entry
5. Repeat for batches of icons
6. Compile into final dataset file

This approach gives you complete control over the quality and consistency of descriptions while leveraging LLM vision capabilities effectively.
