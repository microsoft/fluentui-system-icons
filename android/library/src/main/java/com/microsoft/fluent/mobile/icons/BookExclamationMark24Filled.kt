package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookExclamationMark24: ImageVector
  get() {
    if (_bookExclamationMark24 != null) {
      return _bookExclamationMark24!!
    }
    _bookExclamationMark24 = fluentIcon(name = "Filled.BookExclamationMark24", 24f) {
      materialPath {
          moveTo(4.0F, 4.5F)
          verticalLineToRelative(15.0F)
          curveTo(4.0F, 20.88F, 5.12F, 22.0F, 6.5F, 22.0F)
          horizontalLineToRelative(13.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(6.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          horizontalLineToRelative(14.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.5F)
          curveTo(20.5F, 3.12F, 19.38F, 2.0F, 18.0F, 2.0F)
          horizontalLineTo(6.5F)
          curveTo(5.12F, 2.0F, 4.0F, 3.12F, 4.0F, 4.5F)
          close()
          moveToRelative(7.5F, 7.25F)
          verticalLineToRelative(-5.0F)
          curveTo(11.5F, 6.336F, 11.836F, 6.0F, 12.25F, 6.0F)
          reflectiveCurveTo(13.0F, 6.336F, 13.0F, 6.75F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveToRelative(1.75F, 2.75F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _bookExclamationMark24!!
  }

private var _bookExclamationMark24: ImageVector? = null
