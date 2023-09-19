package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookOpen16: ImageVector
  get() {
    if (_bookOpen16 != null) {
      return _bookOpen16!!
    }
    _bookOpen16 = fluentIcon(name = "Filled.BookOpen16", 16f) {
      materialPath {
          moveTo(2.75F, 2.0F)
          curveTo(1.784F, 2.0F, 1.0F, 2.784F, 1.0F, 3.75F)
          verticalLineToRelative(8.5F)
          curveTo(1.0F, 13.216F, 1.784F, 14.0F, 2.75F, 14.0F)
          horizontalLineTo(6.0F)
          curveToRelative(0.788F, 0.0F, 1.499F, -0.331F, 2.0F, -0.863F)
          curveTo(8.501F, 13.67F, 9.212F, 14.0F, 10.0F, 14.0F)
          horizontalLineToRelative(3.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-8.5F)
          curveTo(15.0F, 2.784F, 14.216F, 2.0F, 13.25F, 2.0F)
          horizontalLineTo(10.0F)
          curveTo(9.212F, 2.0F, 8.501F, 2.331F, 8.0F, 2.862F)
          curveTo(7.499F, 2.332F, 6.788F, 2.0F, 6.0F, 2.0F)
          horizontalLineTo(2.75F)
          close()
          moveToRelative(4.5F, 2.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(2.75F)
          curveToRelative(-0.138F, 0.0F, -0.25F, -0.112F, -0.25F, -0.25F)
          verticalLineToRelative(-8.5F)
          curveToRelative(0.0F, -0.138F, 0.112F, -0.25F, 0.25F, -0.25F)
          horizontalLineTo(6.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          close()
          moveToRelative(1.5F, 6.5F)
          verticalLineToRelative(-6.5F)
          curveTo(8.75F, 4.06F, 9.31F, 3.5F, 10.0F, 3.5F)
          horizontalLineToRelative(3.25F)
          curveToRelative(0.138F, 0.0F, 0.25F, 0.112F, 0.25F, 0.25F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.138F, -0.112F, 0.25F, -0.25F, 0.25F)
          horizontalLineTo(10.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          close()        
      }
    }
    return _bookOpen16!!
  }

private var _bookOpen16: ImageVector? = null
