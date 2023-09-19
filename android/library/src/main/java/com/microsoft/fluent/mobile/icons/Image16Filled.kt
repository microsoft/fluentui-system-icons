package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Image16: ImageVector
  get() {
    if (_image16 != null) {
      return _image16!!
    }
    _image16 = fluentIcon(name = "Filled.Image16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.51F, 0.152F, 0.983F, 0.414F, 1.379F)
          lineToRelative(4.384F, -4.384F)
          curveToRelative(0.664F, -0.664F, 1.74F, -0.664F, 2.404F, 0.0F)
          lineToRelative(4.384F, 4.384F)
          curveTo(13.848F, 12.483F, 14.0F, 12.009F, 14.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(7.0F, 3.502F)
          curveToRelative(0.0F, 0.554F, -0.449F, 1.002F, -1.002F, 1.002F)
          curveToRelative(-0.553F, 0.0F, -1.002F, -0.448F, -1.002F, -1.002F)
          curveToRelative(0.0F, -0.553F, 0.448F, -1.002F, 1.002F, -1.002F)
          curveToRelative(0.553F, 0.0F, 1.002F, 0.449F, 1.002F, 1.002F)
          close()
          moveToRelative(1.379F, 8.084F)
          lineTo(8.495F, 9.202F)
          curveToRelative(-0.273F, -0.273F, -0.717F, -0.273F, -0.99F, 0.0F)
          lineToRelative(-4.384F, 4.384F)
          curveTo(3.517F, 13.848F, 3.991F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.51F, 0.0F, 0.983F, -0.152F, 1.379F, -0.414F)
          close()        
      }
    }
    return _image16!!
  }

private var _image16: ImageVector? = null
