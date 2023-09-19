package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageOff48: ImageVector
  get() {
    if (_imageOff48 != null) {
      return _imageOff48!!
    }
    _imageOff48 = fluentIcon(name = "Filled.ImageOff48", 48f) {
      materialPath {
          moveTo(39.266F, 41.034F)
          lineToRelative(2.6F, 2.6F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-37.5F, -37.5F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(2.6F, 2.6F)
          curveTo(6.355F, 9.674F, 6.0F, 10.795F, 6.0F, 12.0F)
          verticalLineToRelative(24.0F)
          curveToRelative(0.0F, 1.205F, 0.355F, 2.326F, 0.966F, 3.266F)
          lineToRelative(14.382F, -14.382F)
          curveToRelative(0.31F, -0.31F, 0.66F, -0.554F, 1.035F, -0.733F)
          lineToRelative(2.5F, 2.499F)
          curveToRelative(-0.489F, -0.486F, -1.28F, -0.486F, -1.767F, 0.002F)
          lineTo(8.734F, 41.034F)
          curveTo(9.674F, 41.645F, 10.795F, 42.0F, 12.0F, 42.0F)
          horizontalLineToRelative(24.0F)
          curveToRelative(1.205F, 0.0F, 2.326F, -0.355F, 3.266F, -0.966F)
          close()
          moveToRelative(2.6F, -3.765F)
          curveTo(41.953F, 36.86F, 42.0F, 36.435F, 42.0F, 36.0F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          horizontalLineTo(12.0F)
          curveToRelative(-0.435F, 0.0F, -0.86F, 0.046F, -1.27F, 0.135F)
          lineToRelative(31.136F, 31.134F)
          close()
          moveTo(35.5F, 16.5F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          close()        
      }
    }
    return _imageOff48!!
  }

private var _imageOff48: ImageVector? = null
