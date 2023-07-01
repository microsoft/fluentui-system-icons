package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookOpen24: ImageVector
  get() {
    if (_bookOpen24 != null) {
      return _bookOpen24!!
    }
    _bookOpen24 = fluentIcon(name = "Filled.BookOpen24", 24f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          curveTo(2.895F, 4.0F, 2.0F, 4.895F, 2.0F, 6.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.768F, 0.0F, 1.47F, -0.289F, 2.0F, -0.764F)
          curveTo(12.53F, 19.711F, 13.232F, 20.0F, 14.0F, 20.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.768F, 0.0F, -1.47F, 0.289F, -2.0F, 0.764F)
          curveTo(11.47F, 4.289F, 10.768F, 4.0F, 10.0F, 4.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(7.0F, 3.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(2.0F, 10.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(12.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          close()        
      }
    }
    return _bookOpen24!!
  }

private var _bookOpen24: ImageVector? = null
