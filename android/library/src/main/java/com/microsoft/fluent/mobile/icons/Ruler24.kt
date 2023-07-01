package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Ruler24: ImageVector
  get() {
    if (_ruler24 != null) {
      return _ruler24!!
    }
    _ruler24 = fluentIcon(name = "Filled.Ruler24", 24f) {
      materialPath {
          moveTo(7.0F, 4.25F)
          curveTo(7.0F, 3.007F, 8.007F, 2.0F, 9.25F, 2.0F)
          horizontalLineToRelative(5.5F)
          curveTo(15.993F, 2.0F, 17.0F, 3.007F, 17.0F, 4.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-5.5F)
          curveToRelative(-0.155F, 0.0F, -0.307F, -0.016F, -0.454F, -0.046F)
          curveTo(7.771F, 21.744F, 7.0F, 20.837F, 7.0F, 19.75F)
          verticalLineTo(4.25F)
          close()
          moveTo(8.5F, 5.0F)
          verticalLineToRelative(1.5F)
          horizontalLineToRelative(1.75F)
          curveTo(10.664F, 6.5F, 11.0F, 6.164F, 11.0F, 5.75F)
          reflectiveCurveTo(10.664F, 5.0F, 10.25F, 5.0F)
          horizontalLineTo(8.5F)
          close()
          moveToRelative(0.0F, 3.0F)
          verticalLineToRelative(1.5F)
          horizontalLineToRelative(3.75F)
          curveTo(12.664F, 9.5F, 13.0F, 9.164F, 13.0F, 8.75F)
          reflectiveCurveTo(12.664F, 8.0F, 12.25F, 8.0F)
          horizontalLineTo(8.5F)
          close()
          moveToRelative(0.0F, 3.25F)
          verticalLineToRelative(1.5F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(8.5F)
          close()
          moveToRelative(0.0F, 3.25F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(3.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(8.5F)
          close()
          moveToRelative(0.0F, 3.0F)
          verticalLineTo(19.0F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(8.5F)
          close()        
      }
    }
    return _ruler24!!
  }

private var _ruler24: ImageVector? = null
