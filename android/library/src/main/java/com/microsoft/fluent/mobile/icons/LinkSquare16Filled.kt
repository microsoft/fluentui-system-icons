package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LinkSquare16: ImageVector
  get() {
    if (_linkSquare16 != null) {
      return _linkSquare16!!
    }
    _linkSquare16 = fluentIcon(name = "Filled.LinkSquare16", 16f) {
      materialPath {
          moveTo(2.0F, 4.25F)
          curveTo(2.0F, 3.007F, 3.007F, 2.0F, 4.25F, 2.0F)
          horizontalLineToRelative(3.5F)
          curveTo(8.993F, 2.0F, 10.0F, 3.007F, 10.0F, 4.25F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.98F, -0.626F, 1.813F, -1.5F, 2.122F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-3.5F)
          curveTo(3.836F, 3.5F, 3.5F, 3.836F, 3.5F, 4.25F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(5.0F)
          verticalLineTo(10.0F)
          horizontalLineTo(4.25F)
          curveTo(3.007F, 10.0F, 2.0F, 8.993F, 2.0F, 7.75F)
          verticalLineToRelative(-3.5F)
          close()
          moveToRelative(4.0F, 7.5F)
          curveTo(6.0F, 12.993F, 7.007F, 14.0F, 8.25F, 14.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-3.5F)
          curveTo(14.0F, 7.007F, 12.993F, 6.0F, 11.75F, 6.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(1.5F)
          horizontalLineToRelative(0.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-3.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(6.128F)
          curveTo(6.626F, 6.437F, 6.0F, 7.27F, 6.0F, 8.25F)
          verticalLineToRelative(3.5F)
          close()        
      }
    }
    return _linkSquare16!!
  }

private var _linkSquare16: ImageVector? = null
