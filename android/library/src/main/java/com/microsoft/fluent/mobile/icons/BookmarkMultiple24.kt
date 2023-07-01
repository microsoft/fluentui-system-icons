package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookmarkMultiple24: ImageVector
  get() {
    if (_bookmarkMultiple24 != null) {
      return _bookmarkMultiple24!!
    }
    _bookmarkMultiple24 = fluentIcon(name = "Filled.BookmarkMultiple24", 24f) {
      materialPath {
          moveTo(4.0F, 6.748F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineTo(21.25F)
          curveToRelative(0.0F, 0.268F, -0.143F, 0.517F, -0.376F, 0.65F)
          curveToRelative(-0.233F, 0.134F, -0.52F, 0.133F, -0.751F, -0.002F)
          lineToRelative(-5.623F, -3.28F)
          lineToRelative(-5.622F, 3.28F)
          curveToRelative(-0.232F, 0.135F, -0.519F, 0.136F, -0.752F, 0.002F)
          curveTo(4.144F, 21.767F, 4.0F, 21.52F, 4.0F, 21.25F)
          verticalLineTo(6.748F)
          close()
          moveTo(15.25F, 2.0F)
          curveTo(17.873F, 2.0F, 20.0F, 4.127F, 20.0F, 6.75F)
          verticalLineToRelative(11.873F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(6.751F)
          curveToRelative(0.0F, -1.796F, -1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineTo(6.637F)
          reflectiveCurveTo(6.75F, 2.942F, 7.434F, 2.42F)
          curveTo(8.0F, 2.0F, 8.602F, 2.0F, 8.602F, 2.0F)
          horizontalLineToRelative(6.648F)
          close()        
      }
    }
    return _bookmarkMultiple24!!
  }

private var _bookmarkMultiple24: ImageVector? = null
