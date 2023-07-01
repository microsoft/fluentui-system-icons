package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Dock20: ImageVector
  get() {
    if (_dock20 != null) {
      return _dock20!!
    }
    _dock20 = fluentIcon(name = "Filled.Dock20", 20f) {
      materialPath {
          moveTo(10.53F, 3.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(1.22F, -1.22F)
          verticalLineToRelative(6.69F)
          curveTo(9.25F, 12.664F, 9.586F, 13.0F, 10.0F, 13.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(5.56F)
          lineToRelative(1.22F, 1.22F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-2.5F, -2.5F)
          close()
          moveTo(3.5F, 10.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(2.75F)
          curveTo(7.664F, 9.5F, 8.0F, 9.164F, 8.0F, 8.75F)
          reflectiveCurveTo(7.664F, 8.0F, 7.25F, 8.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 8.0F, 2.0F, 9.12F, 2.0F, 10.5F)
          verticalLineToRelative(3.0F)
          curveTo(2.0F, 14.88F, 3.12F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-3.0F)
          curveTo(18.0F, 9.12F, 16.88F, 8.0F, 15.5F, 8.0F)
          horizontalLineToRelative(-2.75F)
          curveTo(12.336F, 8.0F, 12.0F, 8.336F, 12.0F, 8.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(2.75F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-11.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-3.0F)
          close()        
      }
    }
    return _dock20!!
  }

private var _dock20: ImageVector? = null
