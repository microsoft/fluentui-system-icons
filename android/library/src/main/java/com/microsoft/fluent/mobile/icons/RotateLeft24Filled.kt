package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RotateLeft24: ImageVector
  get() {
    if (_rotateLeft24 != null) {
      return _rotateLeft24!!
    }
    _rotateLeft24 = fluentIcon(name = "Filled.RotateLeft24", 24f) {
      materialPath {
          moveTo(14.5F, 15.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineTo(15.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -1.567F, 4.5F, -3.5F)
          curveToRelative(0.0F, -1.874F, -1.895F, -3.405F, -4.275F, -3.496F)
          lineTo(15.0F, 6.5F)
          horizontalLineTo(8.061F)
          lineToRelative(1.72F, 1.72F)
          curveToRelative(0.292F, 0.293F, 0.292F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.267F, 0.267F, -0.684F, 0.29F, -0.977F, 0.073F)
          lineTo(8.72F, 9.28F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(3.0F, -3.0F)
          lineToRelative(0.084F, -0.073F)
          curveTo(9.097F, 1.929F, 9.514F, 1.953F, 9.78F, 2.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(8.062F, 5.0F)
          horizontalLineTo(15.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.239F, 6.0F, 5.0F)
          reflectiveCurveToRelative(-2.686F, 5.0F, -6.0F, 5.0F)
          horizontalLineToRelative(-0.5F)
          close()
          moveToRelative(-11.0F, -4.633F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(16.138F)
          curveToRelative(0.179F, 0.0F, 0.344F, -0.095F, 0.433F, -0.25F)
          curveToRelative(0.138F, -0.238F, 0.057F, -0.544F, -0.182F, -0.683F)
          lineTo(3.75F, 10.434F)
          curveToRelative(-0.076F, -0.044F, -0.162F, -0.067F, -0.25F, -0.067F)
          close()        
      }
    }
    return _rotateLeft24!!
  }

private var _rotateLeft24: ImageVector? = null
