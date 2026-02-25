---
title: LED music visualizer complete build photos
description: >-
  LED music visualizer complete build photos - Hand-soldered LED matrix display
  with visual effects reacting to sound. Explore the making-of process,
  challenges, and learnings.
pubDate: '2024-04-16T02:33:00.000Z'
author: Ezra
type: project
image:
  url: ./my_initial_sketch.webp
  alt: LED music visualizer complete build photos
tags:
  - led-matrix
  - diy-electronics
  - soldering
  - power-distribution
  - wiring
  - addressable-leds
  - motion-patterns
  - light-display
  - visual-display
  - hardware-design
  - project
---

# Building an LED Matrix From Scratch: What I Built and What I Learned

&nbsp;

## Starting With an Idea and a Lot of LEDs

&nbsp;

This project started with a simple idea. I wanted a large LED display that felt more alive than a static screen. The final result is a hand soldered LED matrix measuring roughly 20 by 16 inches. Visually, it behaves somewhat like a music visualizer, but instead of reacting only to sound, it became a general purpose canvas for experimenting with motion, patterns, and light.

&nbsp;

From the beginning, I knew this would not be a plug and play build. I wanted to understand how everything worked at a practical level, from power delivery to data flow, even if that meant things would take longer or break along the way.

&nbsp;

## Learning the Hardware Through Trial and Error

&nbsp;

Most of the work went into the physical build. Every LED and electrical connection was soldered by hand, which quickly became the most time consuming part of the project. Keeping rows aligned, avoiding cold joints, and fixing mistakes as they appeared forced me to slow down and work carefully.

&nbsp;

The matrix uses WS2812 addressable LEDs arranged in a vertical zig zag pattern. Because of the current requirements at scale, power is injected every other vertical column rather than relying on a single feed point. This significantly reduced voltage drop and kept color consistency across the display.

&nbsp;

Power distribution became a major learning experience. As the matrix grew, issues like voltage drop and current limits stopped being abstract concepts and turned into real problems that affected whether the system worked at all. To address this, I used a 20 amp fanless AC to DC power supply mounted behind the matrix and connected via a standard barrel connector.

&nbsp;

To protect the system, I added multiple layers of safety. Inline tube fuses are used alongside 5 amp automotive blade fuses to ensure no single section can overload. On the software side, I hard limited the global brightness to 72 percent so the matrix never attempts to draw more power than the supply can safely deliver, even under worst case scenarios.

&nbsp;

## Mapping the LEDs in Software

&nbsp;

Once the hardware layout was locked in, I needed a reliable way to map physical LED positions to logical coordinates. Because the LEDs are wired in a zig zag pattern, a straight linear mapping would not work.

&nbsp;

I solved this by generating a custom coordinate map that accounts for alternating column direction. Even numbered columns count top to bottom, while odd numbered columns reverse direction. This allows animations to be written in simple x and y space without caring about wiring direction.

&nbsp;

## This is the exact mapping function I used:

&nbsp;

function(pixelCount) {
  var width = 21;
  var height = 27;
  var map = [];

  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var i = x % 2 == 0
        ? (x * height + y)
        : (x * height + (height - 1 - y));
      map[i] = [x, y];
    }
  }

  return map;
}

&nbsp;

Once this mapping was in place, writing animations became far more intuitive. Effects could be described in terms of position and motion rather than individual LED indices, which made experimentation much faster.

&nbsp;

## Making the Matrix Come Alive With Software

&nbsp;

With the hardware stable and the mapping solved, the focus shifted to software. I used JavaScript to drive animations and manage data updates across the matrix. Writing patterns that look good on a computer screen is one thing. Writing patterns that look good on a large physical grid of LEDs is very different.

&nbsp;

Refresh timing, update order, and animation pacing all had a noticeable impact on how smooth or harsh effects appeared. Many animations went through several iterations before they felt right. This part of the project involved a lot of trial, error, and small adjustments that only made sense once I could see the results in real space.

&nbsp;

## Adding Remote Control Through a Web Interface

&nbsp;

One of the most rewarding additions was a simple web based interface. I wanted to control the matrix without plugging into it directly, so I built a local interface that works from a phone or any browser on the network.

&nbsp;

This pushed the project beyond hardware alone and into networking and user interface work. The goal was not to make something flashy. It was to make the system usable. Being able to change patterns, tweak parameters, or shut things down remotely made the project feel complete in a way it had not before.

&nbsp;

## Why This Project Was Worth Building

&nbsp;

What I enjoy most about this project is that it did not stop being interesting once it was finished. I still find myself tweaking animations, refining power limits, and rewriting sections of code as I learn more.

&nbsp;

More than anything, this build showed me how much depth exists at the intersection of hardware and software. It reinforced that learning comes from debugging real problems, making mistakes, and gradually turning a rough idea into something reliable and well understood.

&nbsp;

This LED matrix is not just a display. It is a record of what I learned and a platform I can keep improving.

## Reference Images

<div class="gallery-grid">
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/my_initial_sketch.webp" alt="LED music visualizer complete build photos" />
    <figcaption>My Initial Sketch</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/the_first_of_what_would_b.webp" alt="LED music visualizer complete build photos" />
    <figcaption>The first of what would be many power diagrams</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/the_blank_chipboard_i_sta.webp" alt="LED music visualizer complete build photos" />
    <figcaption>The blank chipboard I started with</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/the_first_few_rows_took_f.webp" alt="LED music visualizer complete build photos" />
    <figcaption>The first few rows took forever</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/a_quick_test_tells_me_i_a.webp" alt="LED music visualizer complete build photos" />
    <figcaption>A quick test tells me I am on the right track</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/slow_going.webp" alt="LED music visualizer complete build photos" />
    <figcaption>Slow going</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/next_time_i_will_buy_a_pr.webp" alt="LED music visualizer complete build photos" />
    <figcaption>Next time I will buy a pre-built matrix </figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/victory__.webp" alt="LED music visualizer complete build photos" />
    <figcaption>Victory!!</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/the_matrix_stands_off_the.webp" alt="LED music visualizer complete build photos" />
    <figcaption>The matrix stands off the backboard</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/shadow_box_channel_frame_.webp" alt="LED music visualizer complete build photos" />
    <figcaption>Shadow box channel frame is 65mm tall</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/connecting_the_sound_inpu.webp" alt="LED music visualizer complete build photos" />
    <figcaption>Connecting the sound input expansion board to the system</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/i_love_shrink_tube.webp" alt="LED music visualizer complete build photos" />
    <figcaption>I LOVE shrink tube</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/power_and_data_distributi.webp" alt="LED music visualizer complete build photos" />
    <figcaption>Power and data distribution on the back of the visualizer</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/back_view.webp" alt="LED music visualizer complete build photos" />
    <figcaption>Back view</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/all_data_and_power_works_.webp" alt="LED music visualizer complete build photos" />
    <figcaption>All data and power works!!</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/we_have_lift_off_.webp" alt="LED music visualizer complete build photos" />
    <figcaption>We have lift off!</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/diffusor_installed_and_ma.webp" alt="LED music visualizer complete build photos" />
    <figcaption>Diffusor installed and mango for scale, I didn't have a banana :)</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/installed_on_the_hi_fi_ra.webp" alt="LED music visualizer complete build photos" />
    <figcaption>Installed on the hi-fi rack</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/so_many_options_for_prett.webp" alt="LED music visualizer complete build photos" />
    <figcaption>So many options for pretty colors</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/in_action.webp" alt="LED music visualizer complete build photos" />
    <figcaption>In action</figcaption>
  </figure>
  <figure>
    <img src="/superlite_geode/posts/2024-04-16-led-music-visualizer-complete-build-phot/if_you_made_it_this_far_y.webp" alt="LED music visualizer complete build photos" />
    <figcaption>If you made it this far your reward is my cute puppers!</figcaption>
  </figure>
</div>
