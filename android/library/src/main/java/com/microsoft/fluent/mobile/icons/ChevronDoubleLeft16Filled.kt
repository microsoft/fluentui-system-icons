package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronDoubleLeft16: ImageVector
  get() {
    if (_chevronDoubleLeft16 != null) {
      return _chevronDoubleLeft16!!
    }
    _chevronDoubleLeft16 = fluentIcon(name = "Filled.ChevronDoubleLeft16", 16f) {
      materialPath {
          moveTo(8.3F, 11.74F)
          curveToRelative(0.281F, 0.303F, 0.264F, 0.778F, -0.04F, 1.06F)
          curveToRelative(-0.303F, 0.281F, -0.778F, 0.264F, -1.06F, -0.04F)
          lineToRelative(-4.0F, -4.25F)
          curveToRelative(-0.267F, -0.287F, -0.267F, -0.733F, 0.0F, -1.02F)
          lineToRelative(4.0F, -4.25F)
          curveTo(7.482F, 2.936F, 7.957F, 2.919F, 8.26F, 3.2F)
          curveTo(8.564F, 3.482F, 8.582F, 3.957F, 8.3F, 4.26F)
          lineTo(4.773F, 8.0F)
          lineTo(8.3F, 11.74F)
          close()
          moveToRelative(4.0F, 0.0F)
          curveToRelative(0.281F, 0.303F, 0.264F, 0.778F, -0.04F, 1.06F)
          curveToRelative(-0.303F, 0.281F, -0.778F, 0.264F, -1.06F, -0.04F)
          lineToRelative(-4.0F, -4.25F)
          curveToRelative(-0.267F, -0.287F, -0.267F, -0.733F, 0.0F, -1.02F)
          lineToRelative(4.0F, -4.25F)
          curveToRelative(0.282F, -0.304F, 0.757F, -0.321F, 1.06F, -0.04F)
          curveToRelative(0.304F, 0.282F, 0.321F, 0.757F, 0.04F, 1.06F)
          lineTo(8.773F, 8.0F)
          lineToRelative(3.527F, 3.74F)
          close()        
      }
    }
    return _chevronDoubleLeft16!!
  }

private var _chevronDoubleLeft16: ImageVector? = null
