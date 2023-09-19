package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronDoubleDown16: ImageVector
  get() {
    if (_chevronDoubleDown16 != null) {
      return _chevronDoubleDown16!!
    }
    _chevronDoubleDown16 = fluentIcon(name = "Filled.ChevronDoubleDown16", 16f) {
      materialPath {
          moveTo(11.74F, 7.7F)
          curveToRelative(0.303F, -0.281F, 0.778F, -0.264F, 1.06F, 0.04F)
          curveToRelative(0.281F, 0.303F, 0.264F, 0.778F, -0.04F, 1.06F)
          lineToRelative(-4.25F, 4.0F)
          curveToRelative(-0.287F, 0.267F, -0.733F, 0.267F, -1.02F, 0.0F)
          lineToRelative(-4.25F, -4.0F)
          curveTo(2.936F, 8.518F, 2.919F, 8.043F, 3.2F, 7.74F)
          curveTo(3.482F, 7.436F, 3.957F, 7.419F, 4.26F, 7.7F)
          lineTo(8.0F, 11.226F)
          lineTo(11.74F, 7.7F)
          close()
          moveToRelative(0.0F, -4.0F)
          curveToRelative(0.303F, -0.281F, 0.778F, -0.264F, 1.06F, 0.04F)
          curveToRelative(0.281F, 0.303F, 0.264F, 0.778F, -0.04F, 1.06F)
          lineToRelative(-4.25F, 4.0F)
          curveToRelative(-0.287F, 0.267F, -0.733F, 0.267F, -1.02F, 0.0F)
          lineToRelative(-4.25F, -4.0F)
          curveTo(2.936F, 4.518F, 2.919F, 4.043F, 3.2F, 3.74F)
          curveTo(3.482F, 3.436F, 3.957F, 3.419F, 4.26F, 3.7F)
          lineTo(8.0F, 7.226F)
          lineTo(11.74F, 3.7F)
          close()        
      }
    }
    return _chevronDoubleDown16!!
  }

private var _chevronDoubleDown16: ImageVector? = null
