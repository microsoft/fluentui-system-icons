package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextFontSize24: ImageVector
  get() {
    if (_textFontSize24 != null) {
      return _textFontSize24!!
    }
    _textFontSize24 = fluentIcon(name = "Regular.TextFontSize24", 24f) {
      materialPath {
          moveTo(10.212F, 17.11F)
          lineTo(15.043F, 3.5F)
          curveToRelative(0.223F, -0.627F, 1.07F, -0.664F, 1.365F, -0.111F)
          lineToRelative(0.049F, 0.11F)
          lineToRelative(5.5F, 15.5F)
          curveToRelative(0.139F, 0.391F, -0.066F, 0.82F, -0.456F, 0.958F)
          curveToRelative(-0.358F, 0.127F, -0.748F, -0.034F, -0.917F, -0.362F)
          lineToRelative(-0.04F, -0.094F)
          lineTo(18.945F, 15.0F)
          horizontalLineToRelative(-6.394F)
          lineToRelative(-1.58F, 4.452F)
          curveToRelative(-0.052F, 0.188F, -0.176F, 0.353F, -0.354F, 0.452F)
          lineToRelative(-0.093F, 0.044F)
          curveToRelative(-0.353F, 0.14F, -0.748F, -0.008F, -0.929F, -0.33F)
          lineToRelative(-0.043F, -0.092F)
          lineTo(8.556F, 17.0F)
          horizontalLineTo(4.443F)
          lineToRelative(-0.995F, 2.52F)
          curveToRelative(-0.14F, 0.354F, -0.518F, 0.542F, -0.876F, 0.454F)
          lineToRelative(-0.098F, -0.031F)
          curveToRelative(-0.353F, -0.14F, -0.54F, -0.518F, -0.452F, -0.876F)
          lineToRelative(0.03F, -0.098F)
          lineToRelative(3.754F, -9.495F)
          curveTo(6.042F, 8.88F, 6.85F, 8.844F, 7.151F, 9.37F)
          lineToRelative(0.05F, 0.105F)
          lineToRelative(3.011F, 7.635F)
          lineTo(15.043F, 3.5F)
          lineToRelative(-4.831F, 13.61F)
          close()
          moveToRelative(-3.71F, -5.318F)
          lineTo(5.037F, 15.5F)
          horizontalLineToRelative(2.928F)
          lineToRelative(-1.461F, -3.708F)
          close()
          moveToRelative(9.248F, -5.8F)
          lineTo(13.084F, 13.5F)
          horizontalLineToRelative(5.33F)
          lineTo(15.75F, 5.992F)
          close()        
      }
    }
    return _textFontSize24!!
  }

private var _textFontSize24: ImageVector? = null
