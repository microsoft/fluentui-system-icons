package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonFeedback16: ImageVector
  get() {
    if (_personFeedback16 != null) {
      return _personFeedback16!!
    }
    _personFeedback16 = fluentIcon(name = "Filled.PersonFeedback16", 16f) {
      materialPath {
          moveTo(9.5F, 1.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.552F, 0.447F, 1.0F, 1.0F, 1.0F)
          verticalLineTo(7.0F)
          lineToRelative(1.8F, -1.5F)
          horizontalLineToRelative(2.2F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveTo(5.0F, 4.0F)
          curveTo(3.895F, 4.0F, 3.0F, 4.895F, 3.0F, 6.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(2.5F, 5.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(1.672F, 9.0F, 1.0F, 9.672F, 1.0F, 10.5F)
          curveToRelative(0.0F, 1.116F, 0.459F, 2.01F, 1.212F, 2.615F)
          curveTo(2.953F, 13.71F, 3.947F, 14.0F, 5.0F, 14.0F)
          curveToRelative(1.053F, 0.0F, 2.047F, -0.29F, 2.788F, -0.885F)
          curveTo(8.54F, 12.51F, 9.0F, 11.616F, 9.0F, 10.5F)
          curveTo(9.0F, 9.672F, 8.328F, 9.0F, 7.5F, 9.0F)
          close()        
      }
    }
    return _personFeedback16!!
  }

private var _personFeedback16: ImageVector? = null
