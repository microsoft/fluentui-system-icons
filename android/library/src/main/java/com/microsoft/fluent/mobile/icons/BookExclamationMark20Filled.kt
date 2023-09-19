package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookExclamationMark20: ImageVector
  get() {
    if (_bookExclamationMark20 != null) {
      return _bookExclamationMark20!!
    }
    _bookExclamationMark20 = fluentIcon(name = "Filled.BookExclamationMark20", 20f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(15.776F, 18.0F, 15.5F, 18.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(6.0F, 1.0F)
          curveTo(9.724F, 5.0F, 9.5F, 5.224F, 9.5F, 5.5F)
          verticalLineToRelative(4.0F)
          curveTo(9.5F, 9.776F, 9.724F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-4.0F)
          curveTo(10.5F, 5.224F, 10.276F, 5.0F, 10.0F, 5.0F)
          close()
          moveToRelative(0.75F, 7.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(9.586F, 13.0F, 10.0F, 13.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          close()        
      }
    }
    return _bookExclamationMark20!!
  }

private var _bookExclamationMark20: ImageVector? = null
