# Image2Colors Community Guide

Welcome, and thank you for stopping by. This page walks you through **[Image2Colors.com](https://www.image2colors.com)**, even if this is your very first visit. It only takes a few minutes.

## What Image2Colors does

**[Image2Colors.com](https://www.image2colors.com)** looks at an image and pulls the colors out of it. From there you can copy a single color or export the whole palette in the format you need.

That is where it starts, but not where it ends. The app keeps growing, and color extraction is only the first chapter.

We have more in mind. If you have an idea, a wish, or something that quietly annoyed you, we truly want to hear it. Open an issue at [github.com/nxpatterns/image2colors-community/issues/new](https://github.com/nxpatterns/image2colors-community/issues/new), or come say hello on Reddit at [reddit.com/r/image2colors](https://www.reddit.com/r/image2colors).

And if you know more about color than about building apps, even better. We would love to learn from you, and maybe build something together.

## How to start

There are two easy ways in. Bring your own image, or use the demo image that already waits inside the app.

Either way, you can start playing right away: paint over the areas you care about with the brush, then click **Extract Colors**.

You do not have to mark anything. If you want the colors of the whole picture, just click **Extract Colors** and the app reads the entire image for you.

## Select the important area or areas

**[Image2Colors.com](https://www.image2colors.com)** began with a simple wish: we wanted to catch the colors of nature. And nature, it turns out, is shy. Its best colors often hide in a small corner of the frame, and reading the whole image tends to wash them out. So we gave you a way to point at what matters. A butterfly resting on a flower. A bird half-hidden in a tree. A single car in a gray street. Mark it, and you get the colors you actually came for.

To make that easy, you have a few tools:

- a brush to paint over the pixels you want
- an eraser to take pixels back out
- undo and redo, for when your hand slips
- clear, to wipe the selection and start over

If you mark nothing, the app uses the whole image. Your upload if you brought one, and the demo image if you did not.

## Choose how colors should be extracted

Here is a fair question: **why three modes at all?**

Because "the colors of an image" is not one single truth. It depends on what you are looking for. So we gave you three lenses, and each one answers a different question.

**Natural** answers: **what does this image actually feel like?** It reads the whole range of light and shadow and hands the colors back in the proportion they really appear. If a photo is mostly soft greens with a little sky, that is what you get, soft greens with a little sky. This is the mode for mood boards, for painters, for anyone who wants the honest atmosphere of a scene instead of a tidied-up version of it.

**Distinctive** answers: **what are the truly different colors in here?** It pushes the results apart on purpose and drops the near-twins, so every swatch clearly earns its place. This is the one designers tend to reach for. When you need a palette where each color is its own decision, a base, an accent, a highlight that will not quietly collapse into its neighbor, start here.

**Random** answers: **what might I not have thought of?** It picks real pixels instead of smoothing everything into averages, and it gives you a slightly different take each time you run it. Run it, look, run it again. If you build UI frameworks or design systems and you want unexpected but usable starting points, this is your playground. Reroll until something surprises you.

None of them is more "correct" than the others. Send the same image through all three and you will feel the difference right away, and soon you will know which lens fits which job.

Then decide how many colors you want:

4, 6, 12, 24, 48, 64, 96, or 128.

Small numbers keep things tight, a handful of colors you could build a brand or a set of buttons around. Larger numbers open the image up into a full spectrum, closer to design tokens, gradients, or a sampling sheet you can pick from later.

There is no wrong choice here either. Fewer colors ask you to commit. More colors give you room to wander. And there is a reason the count matters to us: in later versions we want to generate palettes ready-made for frameworks like Angular Material (and others as well), which expect a certain number of colors and tokens. More on that soon.

## Generate and review your palette

Click **Extract Colors**. Your swatches appear in the result panel. Nothing here is final. Keep selecting, adjusting, and extracting until the palette feels right to you.

## Copy and export your result

Copy a single color with a click, or export the whole palette once you are happy with it. You can export as:

- CSS
- JSON
- CSV
- PNG
- SVG
- PDF

For CSS, you can set your own variable prefix, so the names drop straight into your project without a rename.

## Use the header menu when you need help

Up in the header you will find:

- a theme toggle, for light and dark
- a hamburger menu with:
  - Info, a quick guide
  - a link to our Reddit community
  - a feedback dialog

The feedback dialog can attach a little diagnostic info and send it by email. That small detail helps us track down problems that only show up on certain devices.

## When something feels off

A few things tend to trip people up at first. If a result surprises you, check these:

- no image loaded yet, so there is nothing to read colors from
- no swatches selected, in the steps that expect a selection
- expecting every extraction style to look alike. They are meant to feel different.

Still stuck? Use the feedback option in the menu and tell us what you tried. The more you share, the faster we can help, and the better the app becomes for the next person who loves color as much as you do.
