package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BookOpen24: ImageVector
  get() {
    if (_bookOpen24 != null) {
      return _bookOpen24!!
    }
    _bookOpen24 = fluentIcon(name = "Regular.BookOpen24", 24f) {
      materialPath {
          moveTo(12.0F, 19.137F)
          curveTo(11.499F, 19.67F, 10.788F, 20.0F, 10.0F, 20.0F)
          horizontalLineTo(3.75F)
          curveTo(2.784F, 20.0F, 2.0F, 19.216F, 2.0F, 18.25F)
          verticalLineTo(5.75F)
          curveTo(2.0F, 4.784F, 2.784F, 4.0F, 3.75F, 4.0F)
          horizontalLineTo(10.0F)
          curveToRelative(0.788F, 0.0F, 1.499F, 0.331F, 2.0F, 0.862F)
          curveTo(12.501F, 4.332F, 13.212F, 4.0F, 14.0F, 4.0F)
          horizontalLineToRelative(6.25F)
          curveTo(21.216F, 4.0F, 22.0F, 4.784F, 22.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(14.0F)
          curveToRelative(-0.788F, 0.0F, -1.499F, -0.331F, -2.0F, -0.863F)
          close()
          moveTo(3.5F, 5.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 0.138F, 0.112F, 0.25F, 0.25F, 0.25F)
          horizontalLineTo(10.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(6.75F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(3.75F)
          curveTo(3.612F, 5.5F, 3.5F, 5.612F, 3.5F, 5.75F)
          close()
          moveToRelative(9.25F, 11.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(6.25F)
          curveToRelative(0.138F, 0.0F, 0.25F, -0.112F, 0.25F, -0.25F)
          verticalLineTo(5.75F)
          curveToRelative(0.0F, -0.138F, -0.112F, -0.25F, -0.25F, -0.25F)
          horizontalLineTo(14.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(10.5F)
          close()        
      }
    }
    return _bookOpen24!!
  }

private var _bookOpen24: ImageVector? = null
