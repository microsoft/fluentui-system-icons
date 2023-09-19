package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorHoverOff48: ImageVector
  get() {
    if (_cursorHoverOff48 != null) {
      return _cursorHoverOff48!!
    }
    _cursorHoverOff48 = fluentIcon(name = "Filled.CursorHoverOff48", 48f) {
      materialPath {
          moveTo(36.108F, 37.876F)
          lineToRelative(5.758F, 5.758F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-37.5F, -37.5F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(3.29F, 3.29F)
          curveTo(6.26F, 9.884F, 5.25F, 11.2F, 5.25F, 12.75F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineTo(18.0F)
          verticalLineToRelative(-13.5F)
          curveToRelative(0.0F, -0.433F, 0.086F, -0.852F, 0.245F, -1.238F)
          lineTo(20.0F, 21.768F)
          verticalLineTo(42.75F)
          curveToRelative(0.0F, 0.55F, 0.359F, 1.034F, 0.884F, 1.195F)
          curveToRelative(0.525F, 0.161F, 1.094F, -0.04F, 1.401F, -0.495F)
          lineToRelative(4.961F, -7.333F)
          curveToRelative(0.178F, -0.262F, 0.5F, -0.385F, 0.808F, -0.306F)
          lineToRelative(8.054F, 2.065F)
          close()
          moveTo(14.553F, 9.25F)
          lineToRelative(25.425F, 25.424F)
          curveToRelative(1.583F, -0.335F, 2.772F, -1.74F, 2.772F, -3.424F)
          verticalLineToRelative(-18.5F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          horizontalLineTo(14.553F)
          close()        
      }
    }
    return _cursorHoverOff48!!
  }

private var _cursorHoverOff48: ImageVector? = null
