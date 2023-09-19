package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StackVertical20: ImageVector
  get() {
    if (_stackVertical20 != null) {
      return _stackVertical20!!
    }
    _stackVertical20 = fluentIcon(name = "Filled.StackVertical20", 20f) {
      materialPath {
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(10.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(2.75F)
          curveTo(4.5F, 16.664F, 4.164F, 17.0F, 3.75F, 17.0F)
          reflectiveCurveTo(3.0F, 16.664F, 3.0F, 16.25F)
          verticalLineTo(5.5F)
          close()
          moveToRelative(1.5F, 5.708F)
          curveTo(4.806F, 11.074F, 5.144F, 11.0F, 5.5F, 11.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.356F, 0.0F, 0.694F, 0.074F, 1.0F, 0.208F)
          verticalLineTo(9.5F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(1.708F)
          close()
          moveToRelative(11.0F, -5.708F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(1.708F)
          curveTo(4.806F, 7.074F, 5.144F, 7.0F, 5.5F, 7.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.356F, 0.0F, 0.694F, 0.074F, 1.0F, 0.208F)
          verticalLineTo(5.5F)
          close()        
      }
    }
    return _stackVertical20!!
  }

private var _stackVertical20: ImageVector? = null
