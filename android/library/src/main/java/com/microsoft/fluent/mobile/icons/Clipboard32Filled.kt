package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clipboard32: ImageVector
  get() {
    if (_clipboard32 != null) {
      return _clipboard32!!
    }
    _clipboard32 = fluentIcon(name = "Filled.Clipboard32", 32f) {
      materialPath {
          moveTo(23.5F, 4.0F)
          horizontalLineToRelative(-1.67F)
          curveTo(21.417F, 2.835F, 20.305F, 2.0F, 19.0F, 2.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-1.306F, 0.0F, -2.418F, 0.835F, -2.83F, 2.0F)
          horizontalLineTo(8.5F)
          curveTo(6.567F, 4.0F, 5.0F, 5.567F, 5.0F, 7.5F)
          verticalLineToRelative(19.0F)
          curveTo(5.0F, 28.433F, 6.567F, 30.0F, 8.5F, 30.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-19.0F)
          curveTo(27.0F, 5.567F, 25.433F, 4.0F, 23.5F, 4.0F)
          close()
          moveTo(13.0F, 4.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _clipboard32!!
  }

private var _clipboard32: ImageVector? = null
