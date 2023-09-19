package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookOpen20: ImageVector
  get() {
    if (_bookOpen20 != null) {
      return _bookOpen20!!
    }
    _bookOpen20 = fluentIcon(name = "Filled.BookOpen20", 20f) {
      materialPath {
          moveTo(10.0F, 16.137F)
          curveTo(9.499F, 16.67F, 8.788F, 17.0F, 8.0F, 17.0F)
          horizontalLineTo(3.75F)
          curveTo(2.784F, 17.0F, 2.0F, 16.216F, 2.0F, 15.25F)
          verticalLineTo(4.75F)
          curveTo(2.0F, 3.784F, 2.784F, 3.0F, 3.75F, 3.0F)
          horizontalLineTo(8.0F)
          curveToRelative(0.788F, 0.0F, 1.499F, 0.331F, 2.0F, 0.862F)
          curveTo(10.501F, 3.332F, 11.212F, 3.0F, 12.0F, 3.0F)
          horizontalLineToRelative(4.25F)
          curveTo(17.216F, 3.0F, 18.0F, 3.784F, 18.0F, 4.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(12.0F)
          curveToRelative(-0.788F, 0.0F, -1.499F, -0.331F, -2.0F, -0.863F)
          close()
          moveTo(3.5F, 4.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.138F, 0.112F, 0.25F, 0.25F, 0.25F)
          horizontalLineTo(8.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-8.5F)
          curveTo(9.25F, 5.06F, 8.69F, 4.5F, 8.0F, 4.5F)
          horizontalLineTo(3.75F)
          curveTo(3.612F, 4.5F, 3.5F, 4.612F, 3.5F, 4.75F)
          close()
          moveToRelative(7.25F, 9.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(4.25F)
          curveToRelative(0.138F, 0.0F, 0.25F, -0.112F, 0.25F, -0.25F)
          verticalLineTo(4.75F)
          curveToRelative(0.0F, -0.138F, -0.112F, -0.25F, -0.25F, -0.25F)
          horizontalLineTo(12.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(8.5F)
          close()        
      }
    }
    return _bookOpen20!!
  }

private var _bookOpen20: ImageVector? = null
