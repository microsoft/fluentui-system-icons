package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckmarkSquare24: ImageVector
  get() {
    if (_checkmarkSquare24 != null) {
      return _checkmarkSquare24!!
    }
    _checkmarkSquare24 = fluentIcon(name = "Filled.CheckmarkSquare24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          close()
          moveToRelative(10.03F, 6.78F)
          lineToRelative(-5.0F, 5.0F)
          curveToRelative(-0.293F, 0.293F, -0.768F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.004F, -2.004F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          lineToRelative(1.474F, 1.473F)
          lineToRelative(4.47F, -4.47F)
          curveToRelative(0.292F, -0.292F, 0.767F, -0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.294F, 0.293F, 0.769F, 0.0F, 1.061F)
          close()        
      }
    }
    return _checkmarkSquare24!!
  }

private var _checkmarkSquare24: ImageVector? = null
