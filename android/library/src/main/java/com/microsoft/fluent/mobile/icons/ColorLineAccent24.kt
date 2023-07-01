package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColorLineAccent24: ImageVector
  get() {
    if (_colorLineAccent24 != null) {
      return _colorLineAccent24!!
    }
    _colorLineAccent24 = fluentIcon(name = "Regular.ColorLineAccent24", 24f) {
      materialPath {
          moveTo(4.004F, 15.631F)
          curveToRelative(0.01F, 0.15F, 0.037F, 0.299F, 0.08F, 0.444F)
          curveToRelative(0.318F, 1.058F, 1.433F, 1.658F, 2.491F, 1.34F)
          lineToRelative(4.293F, -1.288F)
          curveToRelative(0.426F, -0.128F, 0.82F, -0.342F, 1.159F, -0.627F)
          horizontalLineTo(19.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-15.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.372F, 0.203F, -0.696F, 0.504F, -0.869F)
          close()        
      }
    }
    return _colorLineAccent24!!
  }

private var _colorLineAccent24: ImageVector? = null
