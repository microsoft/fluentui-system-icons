package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Heart16: ImageVector
  get() {
    if (_heart16 != null) {
      return _heart16!!
    }
    _heart16 = fluentIcon(name = "Regular.Heart16", 16f) {
      materialPath {
          moveTo(7.541F, 3.948F)
          curveTo(6.27F, 2.676F, 4.212F, 2.67F, 2.946F, 3.936F)
          curveTo(1.68F, 5.202F, 1.686F, 7.26F, 2.958F, 8.531F)
          lineToRelative(4.707F, 4.708F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineToRelative(4.683F, -4.68F)
          curveToRelative(1.263F, -1.27F, 1.26F, -3.322F, -0.012F, -4.594F)
          curveToRelative(-1.274F, -1.274F, -3.333F, -1.28F, -4.601F, -0.012F)
          lineTo(7.995F, 4.401F)
          lineTo(7.54F, 3.948F)
          close()
          moveToRelative(4.805F, 3.905F)
          lineTo(8.02F, 12.178F)
          lineTo(3.665F, 7.824F)
          curveToRelative(-0.882F, -0.882F, -0.887F, -2.306F, -0.012F, -3.18F)
          curveToRelative(0.875F, -0.876F, 2.299F, -0.871F, 3.181F, 0.01F)
          lineToRelative(0.81F, 0.81F)
          curveToRelative(0.197F, 0.199F, 0.52F, 0.196F, 0.714F, -0.008F)
          lineToRelative(0.79F, -0.796F)
          curveToRelative(0.877F, -0.877F, 2.302F, -0.873F, 3.186F, 0.012F)
          curveToRelative(0.883F, 0.882F, 0.885F, 2.302F, 0.011F, 3.181F)
          close()        
      }
    }
    return _heart16!!
  }

private var _heart16: ImageVector? = null
