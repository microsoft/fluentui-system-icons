package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronDoubleRight16: ImageVector
  get() {
    if (_chevronDoubleRight16 != null) {
      return _chevronDoubleRight16!!
    }
    _chevronDoubleRight16 = fluentIcon(name = "Filled.ChevronDoubleRight16", 16f) {
      materialPath {
          moveTo(7.7F, 4.26F)
          curveTo(7.42F, 3.957F, 7.436F, 3.482F, 7.74F, 3.2F)
          curveTo(8.043F, 2.92F, 8.518F, 2.936F, 8.8F, 3.24F)
          lineToRelative(4.0F, 4.25F)
          curveToRelative(0.267F, 0.287F, 0.267F, 0.733F, 0.0F, 1.02F)
          lineToRelative(-4.0F, 4.25F)
          curveToRelative(-0.282F, 0.304F, -0.757F, 0.321F, -1.06F, 0.04F)
          curveToRelative(-0.304F, -0.282F, -0.321F, -0.757F, -0.04F, -1.06F)
          lineTo(11.226F, 8.0F)
          lineTo(7.7F, 4.26F)
          close()
          moveToRelative(-4.0F, 0.0F)
          curveTo(3.42F, 3.957F, 3.436F, 3.482F, 3.74F, 3.2F)
          curveTo(4.043F, 2.92F, 4.518F, 2.936F, 4.8F, 3.24F)
          lineToRelative(4.0F, 4.25F)
          curveToRelative(0.267F, 0.287F, 0.267F, 0.733F, 0.0F, 1.02F)
          lineToRelative(-4.0F, 4.25F)
          curveToRelative(-0.282F, 0.304F, -0.757F, 0.321F, -1.06F, 0.04F)
          curveToRelative(-0.304F, -0.282F, -0.321F, -0.757F, -0.04F, -1.06F)
          lineTo(7.226F, 8.0F)
          lineTo(3.7F, 4.26F)
          close()        
      }
    }
    return _chevronDoubleRight16!!
  }

private var _chevronDoubleRight16: ImageVector? = null
