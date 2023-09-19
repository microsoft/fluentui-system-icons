package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RotateRight24: ImageVector
  get() {
    if (_rotateRight24 != null) {
      return _rotateRight24!!
    }
    _rotateRight24 = fluentIcon(name = "Filled.RotateRight24", 24f) {
      materialPath {
          moveTo(9.5F, 15.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(9.914F, 13.5F, 9.5F, 13.5F)
          horizontalLineTo(9.0F)
          curveToRelative(-2.485F, 0.0F, -4.5F, -1.567F, -4.5F, -3.5F)
          curveToRelative(0.0F, -1.874F, 1.894F, -3.405F, 4.275F, -3.496F)
          lineTo(9.0F, 6.5F)
          horizontalLineToRelative(6.939F)
          lineToRelative(-1.72F, 1.72F)
          curveToRelative(-0.292F, 0.293F, -0.292F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.267F, 0.267F, 0.684F, 0.29F, 0.977F, 0.073F)
          lineTo(15.28F, 9.28F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-3.0F, -3.0F)
          lineToRelative(-0.084F, -0.073F)
          curveToRelative(-0.293F, -0.218F, -0.71F, -0.194F, -0.976F, 0.073F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(15.938F, 5.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, 2.239F, -6.0F, 5.0F)
          reflectiveCurveToRelative(2.686F, 5.0F, 6.0F, 5.0F)
          horizontalLineToRelative(0.5F)
          close()
          moveToRelative(11.0F, -4.633F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(3.861F)
          curveToRelative(-0.178F, 0.0F, -0.343F, -0.095F, -0.432F, -0.25F)
          curveToRelative(-0.138F, -0.238F, -0.057F, -0.544F, 0.182F, -0.683F)
          lineToRelative(16.638F, -9.633F)
          curveToRelative(0.077F, -0.044F, 0.163F, -0.067F, 0.251F, -0.067F)
          close()        
      }
    }
    return _rotateRight24!!
  }

private var _rotateRight24: ImageVector? = null
