package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Location24: ImageVector
  get() {
    if (_location24 != null) {
      return _location24!!
    }
    _location24 = fluentIcon(name = "Filled.Location24", 24f) {
      materialPath {
          moveTo(18.157F, 16.882F)
          lineToRelative(-1.187F, 1.174F)
          curveToRelative(-0.875F, 0.858F, -2.01F, 1.962F, -3.406F, 3.312F)
          curveToRelative(-0.872F, 0.843F, -2.256F, 0.843F, -3.128F, 0.0F)
          lineToRelative(-3.491F, -3.396F)
          curveToRelative(-0.44F, -0.431F, -0.806F, -0.794F, -1.102F, -1.09F)
          curveToRelative(-3.4F, -3.4F, -3.4F, -8.914F, 0.0F, -12.314F)
          curveToRelative(3.4F, -3.4F, 8.913F, -3.4F, 12.314F, 0.0F)
          curveToRelative(3.4F, 3.4F, 3.4F, 8.914F, 0.0F, 12.314F)
          close()
          moveTo(14.5F, 11.0F)
          curveToRelative(0.0F, -1.381F, -1.12F, -2.5F, -2.5F, -2.5F)
          curveToRelative(-1.381F, 0.0F, -2.5F, 1.119F, -2.5F, 2.5F)
          curveToRelative(0.0F, 1.38F, 1.119F, 2.5F, 2.5F, 2.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          close()        
      }
    }
    return _location24!!
  }

private var _location24: ImageVector? = null
