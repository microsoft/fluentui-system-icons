package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Heart16: ImageVector
  get() {
    if (_heart16 != null) {
      return _heart16!!
    }
    _heart16 = fluentIcon(name = "Filled.Heart16", 16f) {
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
      }
    }
    return _heart16!!
  }

private var _heart16: ImageVector? = null
