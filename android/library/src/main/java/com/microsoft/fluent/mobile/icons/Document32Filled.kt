package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Document32: ImageVector
  get() {
    if (_document32 != null) {
      return _document32!!
    }
    _document32 = fluentIcon(name = "Filled.Document32", 32f) {
      materialPath {
          moveTo(17.0F, 2.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(7.0F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveToRelative(2.0F, 0.117F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.883F)
          curveToRelative(-0.139F, -0.484F, -0.399F, -0.93F, -0.762F, -1.293F)
          lineTo(20.293F, 2.88F)
          curveTo(19.93F, 2.516F, 19.484F, 2.256F, 19.0F, 2.117F)
          close()        
      }
    }
    return _document32!!
  }

private var _document32: ImageVector? = null
