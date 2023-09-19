package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextboxAlignCenter24: ImageVector
  get() {
    if (_textboxAlignCenter24 != null) {
      return _textboxAlignCenter24!!
    }
    _textboxAlignCenter24 = fluentIcon(name = "Filled.TextboxAlignCenter24", 24f) {
      materialPath {
          moveTo(18.25F, 3.0F)
          curveTo(19.769F, 3.0F, 21.0F, 4.231F, 21.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(5.75F)
          curveTo(4.231F, 21.0F, 3.0F, 19.769F, 3.0F, 18.25F)
          verticalLineTo(5.75F)
          curveTo(3.0F, 4.231F, 4.231F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(12.5F)
          close()
          moveTo(7.0F, 10.0F)
          lineToRelative(-0.136F, 0.007F)
          curveTo(6.376F, 10.057F, 6.0F, 10.37F, 6.0F, 10.75F)
          curveToRelative(0.0F, 0.414F, 0.448F, 0.75F, 1.0F, 0.75F)
          horizontalLineToRelative(10.0F)
          lineToRelative(0.136F, -0.007F)
          curveTo(17.624F, 11.443F, 18.0F, 11.13F, 18.0F, 10.75F)
          curveToRelative(0.0F, -0.414F, -0.448F, -0.75F, -1.0F, -0.75F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(8.333F, 3.0F)
          horizontalLineTo(8.667F)
          lineToRelative(-0.09F, 0.007F)
          curveTo(8.25F, 13.057F, 8.0F, 13.37F, 8.0F, 13.75F)
          curveToRelative(0.0F, 0.414F, 0.299F, 0.75F, 0.667F, 0.75F)
          horizontalLineToRelative(6.666F)
          lineToRelative(0.09F, -0.007F)
          curveTo(15.75F, 14.443F, 16.0F, 14.13F, 16.0F, 13.75F)
          curveToRelative(0.0F, -0.414F, -0.299F, -0.75F, -0.667F, -0.75F)
          close()        
      }
    }
    return _textboxAlignCenter24!!
  }

private var _textboxAlignCenter24: ImageVector? = null
