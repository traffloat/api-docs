initSidebarItems({"fn":[["gamma_from_linear","linear [0, 1] -> gamma [0, 1] (not clamped). Works for numbers outside this range (e.g. negative numbers)."],["gamma_u8_from_linear_f32","linear [0, 1] -> gamma [0, 255] (clamped). Values outside this range will be clamped to the range."],["hsv_from_rgb","All ranges in 0-1, rgb is linear."],["linear_f32_from_gamma_u8","gamma [0, 255] -> linear [0, 1]."],["linear_f32_from_linear_u8","linear [0, 255] -> linear [0, 1]. Useful for alpha-channel."],["linear_from_gamma","gamma [0, 1] -> linear [0, 1] (not clamped). Works for numbers outside this range (e.g. negative numbers)."],["linear_u8_from_linear_f32","linear [0, 1] -> linear [0, 255] (clamped). Useful for alpha-channel."],["rgb_from_hsv","All ranges in 0-1, rgb is linear."],["srgba",""],["tint_color_towards","Cheap and ugly. Made for graying out disabled `Ui`:s."]],"struct":[["Color32","This format is used for space-efficient color representation (32 bits)."],["Hsva","Hue, saturation, value, alpha. All in the range [0, 1]. No premultiplied alpha."],["HsvaGamma","Like Hsva but with the `v` value (brightness) being gamma corrected so that it is somewhat perceptually even."],["Rgba","0-1 linear space `RGBA` color with premultiplied alpha."]]});