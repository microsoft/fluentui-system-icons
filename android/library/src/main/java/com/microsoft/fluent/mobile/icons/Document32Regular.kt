package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Document32: ImageVector
  get() {
    if (_document32 != null) {
      return _document32!!
    }
    _document32 = fluentIcon(name = "Regular.Document32", 32f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(6.343F, 2.0F, 5.0F, 3.343F, 5.0F, 5.0F)
          verticalLineToRelative(22.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(16.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(10.828F)
          curveToRelative(0.0F, -0.795F, -0.316F, -1.558F, -0.879F, -2.12F)
          lineToRelative(-5.828F, -5.83F)
          curveTo(19.73F, 2.317F, 18.967F, 2.0F, 18.172F, 2.0F)
          horizontalLineTo(8.0F)
          close()
          moveTo(7.0F, 5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(9.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(17.586F, 5.0F)
          horizontalLineTo(20.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.414F)
          lineTo(24.586F, 10.0F)
          close()        
      }
    }
    return _document32!!
  }

private var _document32: ImageVector? = null
