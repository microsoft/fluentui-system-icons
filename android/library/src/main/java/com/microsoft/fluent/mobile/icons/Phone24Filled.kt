package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Phone24: ImageVector
  get() {
    if (_phone24 != null) {
      return _phone24!!
    }
    _phone24 = fluentIcon(name = "Filled.Phone24", 24f) {
      materialPath {
          moveTo(15.75F, 2.0F)
          curveTo(16.993F, 2.0F, 18.0F, 3.007F, 18.0F, 4.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(7.007F, 22.0F, 6.0F, 20.993F, 6.0F, 19.75F)
          verticalLineTo(4.25F)
          curveTo(6.0F, 3.007F, 7.007F, 2.0F, 8.25F, 2.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveToRelative(-2.5F, 16.0F)
          horizontalLineToRelative(-2.5F)
          curveTo(10.336F, 18.0F, 10.0F, 18.336F, 10.0F, 18.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(13.664F, 18.0F, 13.25F, 18.0F)
          close()        
      }
    }
    return _phone24!!
  }

private var _phone24: ImageVector? = null
