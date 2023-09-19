package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookLetter20: ImageVector
  get() {
    if (_bookLetter20 != null) {
      return _bookLetter20!!
    }
    _bookLetter20 = fluentIcon(name = "Filled.BookLetter20", 20f) {
      materialPath {
          moveTo(6.0F, 2.0F)
          curveTo(4.895F, 2.0F, 4.0F, 2.895F, 4.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(15.776F, 17.0F, 15.5F, 17.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(4.0F, 3.0F)
          curveToRelative(0.2F, 0.0F, 0.38F, 0.12F, 0.46F, 0.303F)
          lineToRelative(3.0F, 7.0F)
          curveToRelative(0.108F, 0.254F, -0.01F, 0.548F, -0.263F, 0.657F)
          curveToRelative(-0.254F, 0.108F, -0.548F, -0.01F, -0.657F, -0.263F)
          lineTo(11.813F, 11.0F)
          horizontalLineTo(8.187F)
          lineTo(7.46F, 12.697F)
          curveToRelative(-0.11F, 0.254F, -0.403F, 0.371F, -0.657F, 0.263F)
          curveToRelative(-0.254F, -0.11F, -0.371F, -0.403F, -0.263F, -0.657F)
          lineToRelative(3.0F, -7.0F)
          curveTo(9.62F, 5.119F, 9.8F, 5.0F, 10.0F, 5.0F)
          close()
          moveToRelative(-1.385F, 5.0F)
          horizontalLineToRelative(2.77F)
          lineTo(10.0F, 6.77F)
          lineTo(8.615F, 10.0F)
          close()        
      }
    }
    return _bookLetter20!!
  }

private var _bookLetter20: ImageVector? = null
