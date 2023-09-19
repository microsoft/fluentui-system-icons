package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CursorHover20: ImageVector
  get() {
    if (_cursorHover20 != null) {
      return _cursorHover20!!
    }
    _cursorHover20 = fluentIcon(name = "Regular.CursorHover20", 20f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.806F, -0.477F, 1.501F, -1.164F, 1.818F)
          curveToRelative(-0.07F, -0.138F, -0.162F, -0.265F, -0.275F, -0.379F)
          lineToRelative(-0.446F, -0.446F)
          curveTo(16.613F, 13.938F, 17.0F, 13.513F, 17.0F, 13.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 5.0F, 3.0F, 5.448F, 3.0F, 6.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(8.854F, 4.146F)
          curveToRelative(-0.143F, -0.143F, -0.358F, -0.185F, -0.545F, -0.108F)
          curveTo(10.122F, 10.116F, 10.0F, 10.298F, 10.0F, 10.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.218F, 0.142F, 0.411F, 0.35F, 0.477F)
          reflectiveCurveToRelative(0.434F, -0.012F, 0.56F, -0.19F)
          lineToRelative(1.571F, -2.245F)
          lineToRelative(2.943F, 0.452F)
          curveToRelative(0.214F, 0.033F, 0.424F, -0.075F, 0.522F, -0.268F)
          curveToRelative(0.098F, -0.193F, 0.06F, -0.427F, -0.092F, -0.58F)
          lineToRelative(-5.0F, -5.0F)
          close()
          moveTo(11.0F, 15.915F)
          verticalLineToRelative(-4.207F)
          lineToRelative(3.066F, 3.067F)
          lineToRelative(-1.74F, -0.268F)
          curveToRelative(-0.188F, -0.03F, -0.376F, 0.051F, -0.486F, 0.207F)
          lineToRelative(-0.84F, 1.2F)
          close()        
      }
    }
    return _cursorHover20!!
  }

private var _cursorHover20: ImageVector? = null
