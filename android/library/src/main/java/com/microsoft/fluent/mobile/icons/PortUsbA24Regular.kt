package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PortUsbA24: ImageVector
  get() {
    if (_portUsbA24 != null) {
      return _portUsbA24!!
    }
    _portUsbA24 = fluentIcon(name = "Regular.PortUsbA24", 24f) {
      materialPath {
          moveTo(18.0F, 8.0F)
          horizontalLineTo(6.0F)
          curveTo(5.47F, 8.002F, 4.962F, 8.213F, 4.588F, 8.588F)
          curveTo(4.213F, 8.962F, 4.002F, 9.47F, 4.0F, 10.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.002F, 0.53F, 0.213F, 1.038F, 0.588F, 1.412F)
          curveTo(4.962F, 15.787F, 5.47F, 15.998F, 6.0F, 16.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.53F, -0.002F, 1.038F, -0.213F, 1.413F, -0.588F)
          curveTo(19.787F, 15.038F, 19.998F, 14.53F, 20.0F, 14.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(-0.002F, -0.53F, -0.213F, -1.038F, -0.587F, -1.412F)
          curveTo(19.038F, 8.213F, 18.53F, 8.002F, 18.0F, 8.0F)
          close()
          moveTo(5.5F, 10.0F)
          curveToRelative(0.0F, -0.066F, 0.012F, -0.131F, 0.037F, -0.192F)
          curveToRelative(0.025F, -0.061F, 0.061F, -0.116F, 0.108F, -0.163F)
          curveToRelative(0.046F, -0.047F, 0.102F, -0.083F, 0.163F, -0.108F)
          curveTo(5.868F, 9.512F, 5.934F, 9.499F, 6.0F, 9.5F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.066F, 0.0F, 0.131F, 0.012F, 0.192F, 0.037F)
          curveToRelative(0.061F, 0.025F, 0.116F, 0.061F, 0.163F, 0.108F)
          reflectiveCurveToRelative(0.083F, 0.102F, 0.108F, 0.163F)
          curveTo(18.488F, 9.868F, 18.501F, 9.934F, 18.5F, 10.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(-13.0F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _portUsbA24!!
  }

private var _portUsbA24: ImageVector? = null
