package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Doctor16: ImageVector
  get() {
    if (_doctor16 != null) {
      return _doctor16!!
    }
    _doctor16 = fluentIcon(name = "Filled.Doctor16", 16f) {
      materialPath {
          moveTo(6.5F, 1.766F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.671F, -1.5F, 1.5F)
          verticalLineToRelative(1.75F)
          horizontalLineTo(3.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(2.985F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.5F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineTo(11.0F)
          verticalLineTo(3.266F)
          curveToRelative(0.0F, -0.829F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _doctor16!!
  }

private var _doctor16: ImageVector? = null
