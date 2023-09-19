package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Receipt32: ImageVector
  get() {
    if (_receipt32 != null) {
      return _receipt32!!
    }
    _receipt32 = fluentIcon(name = "Regular.Receipt32", 32f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(13.5F)
          curveTo(21.545F, 3.0F, 23.0F, 4.455F, 23.0F, 6.25F)
          verticalLineTo(19.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-17.0F)
          curveTo(5.015F, 29.0F, 3.0F, 26.985F, 3.0F, 24.5F)
          verticalLineTo(6.25F)
          close()
          moveTo(23.0F, 27.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(21.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(6.0F)
          close()
          moveTo(6.25F, 5.0F)
          curveTo(5.56F, 5.0F, 5.0F, 5.56F, 5.0F, 6.25F)
          verticalLineTo(24.5F)
          curveTo(5.0F, 25.88F, 6.12F, 27.0F, 7.5F, 27.0F)
          horizontalLineTo(21.0F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 5.56F, 20.44F, 5.0F, 19.75F, 5.0F)
          horizontalLineTo(6.25F)
          close()
          moveTo(9.0F, 9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(-1.0F, 7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          close()
          moveToRelative(1.0F, 5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _receipt32!!
  }

private var _receipt32: ImageVector? = null
