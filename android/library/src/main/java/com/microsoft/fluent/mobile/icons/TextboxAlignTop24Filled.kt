package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextboxAlignTop24: ImageVector
  get() {
    if (_textboxAlignTop24 != null) {
      return _textboxAlignTop24!!
    }
    _textboxAlignTop24 = fluentIcon(name = "Filled.TextboxAlignTop24", 24f) {
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
          moveTo(7.0F, 7.484F)
          lineTo(6.864F, 7.491F)
          curveTo(6.376F, 7.541F, 6.0F, 7.855F, 6.0F, 8.234F)
          curveToRelative(0.0F, 0.415F, 0.448F, 0.75F, 1.0F, 0.75F)
          horizontalLineToRelative(10.0F)
          lineToRelative(0.136F, -0.007F)
          curveTo(17.624F, 8.927F, 18.0F, 8.614F, 18.0F, 8.234F)
          curveToRelative(0.0F, -0.414F, -0.448F, -0.75F, -1.0F, -0.75F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(10.0F, 3.0F)
          horizontalLineTo(7.0F)
          lineToRelative(-0.136F, 0.007F)
          curveTo(6.376F, 10.541F, 6.0F, 10.855F, 6.0F, 11.234F)
          curveToRelative(0.0F, 0.415F, 0.448F, 0.75F, 1.0F, 0.75F)
          horizontalLineToRelative(10.0F)
          lineToRelative(0.136F, -0.007F)
          curveTo(17.624F, 11.927F, 18.0F, 11.614F, 18.0F, 11.234F)
          curveToRelative(0.0F, -0.414F, -0.448F, -0.75F, -1.0F, -0.75F)
          close()        
      }
    }
    return _textboxAlignTop24!!
  }

private var _textboxAlignTop24: ImageVector? = null
