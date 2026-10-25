# October 24 media update

The gallery contains 27 reel entries. New clips use H.264/AAC MP4 at 720 × 1280, with web playback metadata at the front of each file. Source files remain in the ignored local `d/` directory.

| Supplied file | Company | Gallery entry | Action |
| --- | --- | --- | --- |
| `IMG_3365.MOV` | Covia | `covia-cafe-tasting` | Added; table menu identifies Covia. |
| `IMG_3382.MOV` | Covia | `covia-coffee-preparation` | Added; barista apron identifies Covia. |
| `IMG_5930.MOV` | Cairo Furniture | `cairo-showroom-offer` | Added; showroom signage and Arabic captions identify Cairo Furniture. |
| `IMG_6677.MOV` | Azooz | `azooz-chicken-burger-build` | Added; branded coleslaw container identifies Azooz. |
| `IMG_6679.MOV` | Azooz | `azooz-cheeseburger-tasting` | Added; branded tray identifies Azooz. |
| `AhaTik_100085950818980_97da8c04-e77a-4530-a24c-e31a20333664_.mp4` | Cairo Furniture | `furniture-workshop-tour` | Already present; corrected the generic company label and description. |
| `AhaTik_100085950818980_c2bfaef0-3a84-4eae-8b28-17257cdad0d5_.mp4` | Cairo Furniture | `furnish-your-home` | Already present; Cairo is named in the captions. Corrected company and description. |
| `AhaTik_maderahomeeg_a8522f53-826d-423b-aae9-907162e258a0_.mp4` | Madera Home | `madeira-sofa-fabric` | Already present; retained once and refined the description. |
| `AhaTik_maderahomeeg_f705a5b0-b7e6-47fc-94b1-c8885283128d_.mp4` | Madera Home | `madeira-bed-detail` | Already present; retained once and refined the description. |
| `replace.mp4` | Palermo Coffee | `palermo-matcha` | Replaced the existing clip using stream copy, preserving encoded picture and sound. Removed the duplicate `palermo-matcha-handheld` gallery entry. |

The four AhaTik source files also match the earlier local imports by SHA-256. The workshop and full-home offer share the same supplied account identifier; Cairo is named in the full-home offer. Madera's supplied logo matches the watermark on both showroom videos.

The client wall now includes the supplied Palermo, Madera Home and Vezeeta logos. Vezeeta's name was confirmed by the user. Palermo's phone screenshot was cropped to its logo, excluding the phone interface. The six requested brands were removed from the client wall; Cilantro was also removed from the hero and its testimonial card. Company names and logos live in `src/data/clients.js`, and reel metadata lives in `src/data/reels.js`.
