package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabDesktop24: ImageVector
  get() {
    if (_tabDesktop24 != null) {
      return _tabDesktop24!!
    }
    _tabDesktop24 = fluentIcon(name = "Filled.TabDesktop24", 24f) {
      materialPath {
          moveTo(11.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-7.75F)
          curveTo(12.007F, 8.0F, 11.0F, 6.993F, 11.0F, 5.75F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(10.0F, 3.5F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(2.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(21.0F)
          close()        
      }
    }
    return _tabDesktop24!!
  }

private var _tabDesktop24: ImageVector? = null
