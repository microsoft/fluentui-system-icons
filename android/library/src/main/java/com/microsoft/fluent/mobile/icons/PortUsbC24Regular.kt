package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PortUsbC24: ImageVector
  get() {
    if (_portUsbC24 != null) {
      return _portUsbC24!!
    }
    _portUsbC24 = fluentIcon(name = "Regular.PortUsbC24", 24f) {
      materialPath {
          moveTo(16.0F, 10.5F)
          curveToRelative(0.398F, 0.0F, 0.78F, 0.158F, 1.06F, 0.44F)
          curveToRelative(0.282F, 0.28F, 0.44F, 0.662F, 0.44F, 1.06F)
          reflectiveCurveToRelative(-0.158F, 0.78F, -0.44F, 1.06F)
          curveToRelative(-0.28F, 0.282F, -0.662F, 0.44F, -1.06F, 0.44F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.398F, 0.0F, -0.78F, -0.158F, -1.06F, -0.44F)
          curveTo(6.657F, 12.78F, 6.5F, 12.399F, 6.5F, 12.0F)
          reflectiveCurveToRelative(0.158F, -0.78F, 0.44F, -1.06F)
          curveTo(7.22F, 10.657F, 7.601F, 10.5F, 8.0F, 10.5F)
          horizontalLineToRelative(8.0F)
          close()
          moveTo(16.0F, 9.0F)
          horizontalLineTo(8.0F)
          curveTo(7.204F, 9.0F, 6.441F, 9.316F, 5.879F, 9.879F)
          curveTo(5.316F, 10.44F, 5.0F, 11.204F, 5.0F, 12.0F)
          reflectiveCurveToRelative(0.316F, 1.559F, 0.879F, 2.121F)
          curveTo(6.44F, 14.684F, 7.204F, 15.0F, 8.0F, 15.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.796F, 0.0F, 1.559F, -0.316F, 2.121F, -0.879F)
          curveTo(18.684F, 13.56F, 19.0F, 12.796F, 19.0F, 12.0F)
          reflectiveCurveToRelative(-0.316F, -1.559F, -0.879F, -2.121F)
          curveTo(17.56F, 9.316F, 16.796F, 9.0F, 16.0F, 9.0F)
          close()        
      }
    }
    return _portUsbC24!!
  }

private var _portUsbC24: ImageVector? = null
