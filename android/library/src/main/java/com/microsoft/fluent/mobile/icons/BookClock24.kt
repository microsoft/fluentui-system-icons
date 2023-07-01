package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookClock24: ImageVector
  get() {
    if (_bookClock24 != null) {
      return _bookClock24!!
    }
    _bookClock24 = fluentIcon(name = "Filled.BookClock24", 24f) {
      materialPath {
          moveTo(11.75F, 11.375F)
          curveToRelative(0.0F, 0.345F, 0.28F, 0.625F, 0.625F, 0.625F)
          lineToRelative(0.063F, -0.003F)
          curveTo(12.457F, 11.999F, 12.477F, 12.0F, 12.5F, 12.0F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.345F, 0.0F, 0.625F, -0.28F, 0.625F, -0.625F)
          reflectiveCurveToRelative(-0.28F, -0.625F, -0.625F, -0.625F)
          horizontalLineTo(13.0F)
          verticalLineTo(9.125F)
          curveTo(13.0F, 8.78F, 12.72F, 8.5F, 12.375F, 8.5F)
          reflectiveCurveTo(11.75F, 8.78F, 11.75F, 9.125F)
          verticalLineToRelative(2.25F)
          close()
          moveTo(4.0F, 4.5F)
          curveTo(4.0F, 3.12F, 5.12F, 2.0F, 6.5F, 2.0F)
          horizontalLineTo(18.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(14.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(5.5F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(13.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(20.164F, 22.0F, 19.75F, 22.0F)
          horizontalLineTo(6.5F)
          curveTo(5.12F, 22.0F, 4.0F, 20.88F, 4.0F, 19.5F)
          verticalLineToRelative(-15.0F)
          close()
          moveToRelative(8.375F, 1.505F)
          curveToRelative(-2.623F, 0.0F, -4.75F, 2.127F, -4.75F, 4.75F)
          reflectiveCurveToRelative(2.127F, 4.75F, 4.75F, 4.75F)
          reflectiveCurveToRelative(4.75F, -2.127F, 4.75F, -4.75F)
          reflectiveCurveToRelative(-2.127F, -4.75F, -4.75F, -4.75F)
          close()        
      }
    }
    return _bookClock24!!
  }

private var _bookClock24: ImageVector? = null
