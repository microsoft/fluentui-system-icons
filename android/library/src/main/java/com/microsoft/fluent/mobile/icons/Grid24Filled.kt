package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Grid24: ImageVector
  get() {
    if (_grid24 != null) {
      return _grid24!!
    }
    _grid24 = fluentIcon(name = "Filled.Grid24", 24f) {
      materialPath {
          moveTo(8.75F, 13.0F)
          curveTo(9.993F, 13.0F, 11.0F, 14.007F, 11.0F, 15.25F)
          verticalLineToRelative(3.5F)
          curveTo(11.0F, 19.993F, 9.993F, 21.0F, 8.75F, 21.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(4.007F, 21.0F, 3.0F, 19.993F, 3.0F, 18.75F)
          verticalLineToRelative(-3.5F)
          curveTo(3.0F, 14.007F, 4.007F, 13.0F, 5.25F, 13.0F)
          horizontalLineToRelative(3.5F)
          close()
          moveToRelative(10.0F, 0.0F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-3.5F)
          curveTo(14.007F, 21.0F, 13.0F, 19.993F, 13.0F, 18.75F)
          verticalLineToRelative(-3.5F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(3.5F)
          close()
          moveToRelative(-10.0F, -10.0F)
          curveTo(9.993F, 3.0F, 11.0F, 4.007F, 11.0F, 5.25F)
          verticalLineToRelative(3.5F)
          curveTo(11.0F, 9.993F, 9.993F, 11.0F, 8.75F, 11.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(4.007F, 11.0F, 3.0F, 9.993F, 3.0F, 8.75F)
          verticalLineToRelative(-3.5F)
          curveTo(3.0F, 4.007F, 4.007F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(3.5F)
          close()
          moveToRelative(10.0F, 0.0F)
          curveTo(19.993F, 3.0F, 21.0F, 4.007F, 21.0F, 5.25F)
          verticalLineToRelative(3.5F)
          curveTo(21.0F, 9.993F, 19.993F, 11.0F, 18.75F, 11.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(14.007F, 11.0F, 13.0F, 9.993F, 13.0F, 8.75F)
          verticalLineToRelative(-3.5F)
          curveTo(13.0F, 4.007F, 14.007F, 3.0F, 15.25F, 3.0F)
          horizontalLineToRelative(3.5F)
          close()        
      }
    }
    return _grid24!!
  }

private var _grid24: ImageVector? = null
