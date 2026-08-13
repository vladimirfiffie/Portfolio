# Project preview clips

Drop `.mp4` files here, then point a project at one in
`src/components/Projects.tsx`:

```ts
{
  name: "Smart Advisor",
  src: "/images/SmartAdvisor-LM.png",   // resting image (your logo/screenshot)
  video: "/videos/smart-advisor.mp4",   // <- add this line
  ...
}
```

## Behaviour

The clip plays **once** when the card scrolls into view, then rewinds and
fades out so the resting image is what you're left looking at. Hovering
replays it. If the file is missing or fails to load, the image simply stays —
nothing breaks.

## Requirements

- **Must be muted.** Browsers block autoplay with sound. The `<video>` is
  muted in code, so strip the audio track to save bytes.
- **MP4 / H.264** for the widest support.
- **Keep them short** — 4-8 seconds. It plays once, so make the loop point
  land back near your logo/first frame if you want a clean settle.
- **Under ~3 MB each**, ideally under 1.5 MB. These load on the homepage.
- Match the card's 16:9 aspect so nothing is letterboxed.

## Making one from a screen recording

```sh
ffmpeg -i recording.mov \
  -an \                        # drop audio
  -vf "scale=1280:-2,fps=30" \ # 720p, 30fps
  -c:v libx264 -crf 28 -preset slow -movflags +faststart \
  smart-advisor.mp4
```

`-movflags +faststart` puts the index at the front so playback can begin
before the whole file has downloaded.
