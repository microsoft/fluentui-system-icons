package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TetrisApp32: ImageVector
  get() {
    if (_tetrisApp32 != null) {
      return _tetrisApp32!!
    }
    _tetrisApp32 = fluentIcon(name = "Filled.TetrisApp32", 32f) {
      materialPath {
          moveTo(11.5F, 4.75F)
          curveTo(11.5F, 4.336F, 11.836F, 4.0F, 12.25F, 4.0F)
          horizontalLineToRelative(5.25F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(-6.0F)
          verticalLineTo(4.75F)
          close()
          moveTo(4.75F, 11.5F)
          curveTo(4.336F, 11.5F, 4.0F, 11.836F, 4.0F, 12.25F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineTo(4.75F)
          close()
          moveToRelative(12.75F, 0.0F)
          horizontalLineToRelative(-6.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(5.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(11.5F)
          close()
          moveTo(24.25F, 4.0F)
          horizontalLineTo(19.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(5.25F)
          curveTo(24.664F, 10.0F, 25.0F, 9.664F, 25.0F, 9.25F)
          verticalLineToRelative(-4.5F)
          curveTo(25.0F, 4.336F, 24.664F, 4.0F, 24.25F, 4.0F)
          close()
          moveTo(7.0F, 23.125F)
          curveTo(7.0F, 22.504F, 7.504F, 22.0F, 8.125F, 22.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(8.125F)
          curveTo(7.504F, 28.0F, 7.0F, 27.496F, 7.0F, 26.875F)
          verticalLineToRelative(-3.75F)
          close()
          moveTo(20.5F, 28.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineToRelative(-6.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(1.5F, -6.0F)
          horizontalLineToRelative(4.875F)
          curveTo(27.496F, 22.0F, 28.0F, 22.504F, 28.0F, 23.125F)
          verticalLineToRelative(3.75F)
          curveTo(28.0F, 27.496F, 27.496F, 28.0F, 26.875F, 28.0F)
          horizontalLineTo(22.0F)
          verticalLineToRelative(-6.0F)
          close()
          moveToRelative(1.125F, -7.5F)
          curveTo(22.504F, 14.5F, 22.0F, 15.004F, 22.0F, 15.625F)
          verticalLineTo(20.5F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(-4.875F)
          curveToRelative(0.0F, -0.621F, -0.504F, -1.125F, -1.125F, -1.125F)
          horizontalLineToRelative(-3.75F)
          close()        
      }
    }
    return _tetrisApp32!!
  }

private var _tetrisApp32: ImageVector? = null
