package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TabDesktop24: ImageVector
  get() {
    if (_tabDesktop24 != null) {
      return _tabDesktop24!!
    }
    _tabDesktop24 = fluentIcon(name = "Regular.TabDesktop24", 24f) {
      materialPath {
          moveTo(5.75F, 3.0F)
          curveTo(4.231F, 3.0F, 3.0F, 4.231F, 3.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveTo(3.0F, 19.769F, 4.231F, 21.0F, 5.75F, 21.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(5.75F)
          curveTo(21.0F, 4.231F, 19.769F, 3.0F, 18.25F, 3.0F)
          horizontalLineTo(5.75F)
          close()
          moveTo(11.0F, 4.5F)
          verticalLineToRelative(1.25F)
          curveTo(11.0F, 6.993F, 12.007F, 8.0F, 13.25F, 8.0F)
          horizontalLineToRelative(6.25F)
          verticalLineToRelative(10.25F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(5.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(5.75F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineTo(11.0F)
          close()
          moveToRelative(8.5F, 2.0F)
          horizontalLineToRelative(-6.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(4.5F)
          horizontalLineToRelative(5.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineTo(6.5F)
          close()        
      }
    }
    return _tabDesktop24!!
  }

private var _tabDesktop24: ImageVector? = null
